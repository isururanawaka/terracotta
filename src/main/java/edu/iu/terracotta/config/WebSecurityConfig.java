/**
 * Copyright 2021 Unicon (R)
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package edu.iu.terracotta.config;

import edu.iu.terracotta.security.app.APIOAuthProviderProcessingFilter;
import edu.iu.terracotta.security.app.JwtAuthenticationProvider;
import edu.iu.terracotta.security.lti.LTI3OAuthProviderProcessingFilter;
import edu.iu.terracotta.service.lti.LTIDataService;
import edu.iu.terracotta.service.lti.LTIJWTService;
import edu.iu.terracotta.service.app.APIDataService;
import edu.iu.terracotta.service.app.APIJWTService;
import org.springframework.web.filter.CorsFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.annotation.PostConstruct;

@Configuration
@EnableWebSecurity
@Import(SecurityAutoConfiguration.class)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {


    @Order(10) // VERY HIGH
    @Configuration
    public static class OpenEndpointsConfigurationAdapter extends WebSecurityConfigurerAdapter {
        @Override
        protected void configure(HttpSecurity http) throws Exception {
            // this is open
            http.requestMatchers()
                .antMatchers("/oidc/**")
                .antMatchers("/registration/**")
                .antMatchers("/jwks/**")
                    .and()
                .authorizeRequests().anyRequest().permitAll().and().csrf().disable().headers().frameOptions().disable();
        }
    }


    @Order(30) // VERY HIGH
    @Configuration
    public static class ConfigConfigurationAdapter extends WebSecurityConfigurerAdapter {

        @Autowired
        @Order(Ordered.HIGHEST_PRECEDENCE + 10)
        @SuppressWarnings("SpringJavaAutowiringInspection")
        public void configureSimpleAuthUsers(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication()
                    .withUser("admin").password("{noop}admin").roles("ADMIN", "USER")
                    .and().withUser("user").password("{noop}user").roles("USER");
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.antMatcher("/config/**").authorizeRequests().anyRequest().authenticated().and().httpBasic().and().csrf().disable().headers().frameOptions().disable();
        }
    }

    @Configuration
    @Order(40) // HIGH
    public static class LTI3SecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
        private LTI3OAuthProviderProcessingFilter lti3oAuthProviderProcessingFilter;
        @Autowired
        LTIDataService ltiDataService;
        @Autowired
        LTIJWTService ltijwtService;

        @PostConstruct
        public void init() {
            lti3oAuthProviderProcessingFilter = new LTI3OAuthProviderProcessingFilter(ltiDataService, ltijwtService);
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            /**/
            http.requestMatchers().antMatchers("/lti3/**").and()
                    .addFilterBefore(lti3oAuthProviderProcessingFilter, UsernamePasswordAuthenticationFilter.class)
                    .authorizeRequests().anyRequest().permitAll().and().csrf().disable().headers().frameOptions().disable();
        }
    }

    @Configuration
    @Order(50) // HIGH
    public static class APISecurityConfigurerAdapter extends WebSecurityConfigurerAdapter {
        private APIOAuthProviderProcessingFilter apioAuthProviderProcessingFilter;
        @Autowired
        APIJWTService apiJwtService;

        @Autowired
        APIDataService apiDataService;

        @Autowired
        private JwtAuthenticationProvider jwtAuthenticationProvider;

        @PostConstruct
        public void init() {
            apioAuthProviderProcessingFilter = new APIOAuthProviderProcessingFilter(apiJwtService, apiDataService);
        }

        //TODO: this is never called. Modify it to allow this authentication provider
        //to work for these 2 matchers in a way that it sets the roles.
        @Override
        public void configure(AuthenticationManagerBuilder builder) throws Exception {
            builder.authenticationProvider(jwtAuthenticationProvider);
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.requestMatchers()
                    .antMatchers("/api/**")
                    .and()
                    .addFilterBefore(new CorsFilter(new CorsConfigurationSourceImpl()), BasicAuthenticationFilter.class)
                    //.addFilterBefore(apioAuthProviderProcessingFilter, UsernamePasswordAuthenticationFilter.class)
                    .authorizeRequests().anyRequest().permitAll().and().csrf().disable().headers().frameOptions().disable();
        }
    }


    @Order(80) // LOWEST
    @Configuration
    public static class NoAuthConfigurationAdapter extends WebSecurityConfigurerAdapter {

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            // this ensures security context info (Principal, sec:authorize, etc.) is accessible on all paths
            http.antMatcher("/**").authorizeRequests().anyRequest().permitAll().and().headers().frameOptions().disable();
        }
    }



}
