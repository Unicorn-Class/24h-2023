/**
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Race } from '../model/race';
import { RunResult } from '../model/runResult';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class RacesService {

    protected basePath = 'http://185.98.136.60:9090';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public create1(body: Race, observe?: 'body', reportProgress?: boolean): Observable<Race>;
    public create1(body: Race, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Race>>;
    public create1(body: Race, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Race>>;
    public create1(body: Race, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling create1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Race>('post',`${this.basePath}/races`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRaces(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Race>>;
    public getAllRaces(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Race>>>;
    public getAllRaces(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Race>>>;
    public getAllRaces(teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllRaces.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Race>>('get',`${this.basePath}/races/all/${encodeURIComponent(String(teamId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRacesAdmin(observe?: 'body', reportProgress?: boolean): Observable<Array<Race>>;
    public getAllRacesAdmin(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Race>>>;
    public getAllRacesAdmin(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Race>>>;
    public getAllRacesAdmin(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Race>>('get',`${this.basePath}/races`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RunResult>>;
    public getAllTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RunResult>>>;
    public getAllTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RunResult>>>;
    public getAllTeamRaceByRaceId(raceId: number, teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling getAllTeamRaceByRaceId.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllTeamRaceByRaceId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<RunResult>>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}/teamRace/${encodeURIComponent(String(teamId))}/all`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTeamsBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RunResult>>;
    public getAllTeamsBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RunResult>>>;
    public getAllTeamsBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RunResult>>>;
    public getAllTeamsBestTeamRaceByRaceId(raceId: number, teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling getAllTeamsBestTeamRaceByRaceId.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllTeamsBestTeamRaceByRaceId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<RunResult>>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}/teamRace/${encodeURIComponent(String(teamId))}/allBestTime`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'body', reportProgress?: boolean): Observable<RunResult>;
    public getBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RunResult>>;
    public getBestTeamRaceByRaceId(raceId: number, teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RunResult>>;
    public getBestTeamRaceByRaceId(raceId: number, teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling getBestTeamRaceByRaceId.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getBestTeamRaceByRaceId.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RunResult>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}/teamRace/${encodeURIComponent(String(teamId))}/bestTime`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getById1(raceId: number, observe?: 'body', reportProgress?: boolean): Observable<Race>;
    public getById1(raceId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Race>>;
    public getById1(raceId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Race>>;
    public getById1(raceId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling getById1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Race>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public run(raceId: number, teamId: number, observe?: 'body', reportProgress?: boolean): Observable<RunResult>;
    public run(raceId: number, teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RunResult>>;
    public run(raceId: number, teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RunResult>>;
    public run(raceId: number, teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling run.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling run.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RunResult>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}/run/${encodeURIComponent(String(teamId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param raceId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public runTest(raceId: number, teamId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public runTest(raceId: number, teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public runTest(raceId: number, teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public runTest(raceId: number, teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling runTest.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling runTest.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('get',`${this.basePath}/races/${encodeURIComponent(String(raceId))}/run/${encodeURIComponent(String(teamId))}/test`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}