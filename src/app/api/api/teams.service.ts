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

import { InformativeMessage } from '../model/informativeMessage';
import { RunResult } from '../model/runResult';
import { Team } from '../model/team';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class TeamsService {

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
    public create(body: Team, observe?: 'body', reportProgress?: boolean): Observable<Team>;
    public create(body: Team, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Team>>;
    public create(body: Team, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Team>>;
    public create(body: Team, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling create.');
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

        return this.httpClient.request<Team>('post',`${this.basePath}/teams`,
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
    public getAllBestTimes(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RunResult>>;
    public getAllBestTimes(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RunResult>>>;
    public getAllBestTimes(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RunResult>>>;
    public getAllBestTimes(teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllBestTimes.');
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

        return this.httpClient.request<Array<RunResult>>('get',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/bestTimes`,
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
    public getAllTeams(observe?: 'body', reportProgress?: boolean): Observable<Array<Team>>;
    public getAllTeams(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Team>>>;
    public getAllTeams(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Team>>>;
    public getAllTeams(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

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

        return this.httpClient.request<Array<Team>>('get',`${this.basePath}/teams`,
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
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTimes(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RunResult>>;
    public getAllTimes(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RunResult>>>;
    public getAllTimes(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RunResult>>>;
    public getAllTimes(teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllTimes.');
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

        return this.httpClient.request<Array<RunResult>>('get',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/allTimes`,
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
     * @param teamId 
     * @param raceId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllTimesForOneTrack(teamId: number, raceId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<RunResult>>;
    public getAllTimesForOneTrack(teamId: number, raceId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<RunResult>>>;
    public getAllTimesForOneTrack(teamId: number, raceId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<RunResult>>>;
    public getAllTimesForOneTrack(teamId: number, raceId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getAllTimesForOneTrack.');
        }

        if (raceId === null || raceId === undefined) {
            throw new Error('Required parameter raceId was null or undefined when calling getAllTimesForOneTrack.');
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

        return this.httpClient.request<Array<RunResult>>('get',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/allTimes/${encodeURIComponent(String(raceId))}`,
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
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getById(teamId: number, observe?: 'body', reportProgress?: boolean): Observable<Team>;
    public getById(teamId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Team>>;
    public getById(teamId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Team>>;
    public getById(teamId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getById.');
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

        return this.httpClient.request<Team>('get',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}`,
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
     * @param teamId 
     * @param modifCoins 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchCoins(teamId: number, modifCoins: number, observe?: 'body', reportProgress?: boolean): Observable<InformativeMessage>;
    public patchCoins(teamId: number, modifCoins: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InformativeMessage>>;
    public patchCoins(teamId: number, modifCoins: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InformativeMessage>>;
    public patchCoins(teamId: number, modifCoins: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling patchCoins.');
        }

        if (modifCoins === null || modifCoins === undefined) {
            throw new Error('Required parameter modifCoins was null or undefined when calling patchCoins.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modifCoins !== undefined && modifCoins !== null) {
            queryParameters = queryParameters.set('modifCoins', <any>modifCoins);
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

        return this.httpClient.request<InformativeMessage>('put',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/coins`,
            {
                params: queryParameters,
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
     * @param modifScore 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public patchScore(teamId: number, modifScore: number, observe?: 'body', reportProgress?: boolean): Observable<InformativeMessage>;
    public patchScore(teamId: number, modifScore: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<InformativeMessage>>;
    public patchScore(teamId: number, modifScore: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<InformativeMessage>>;
    public patchScore(teamId: number, modifScore: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling patchScore.');
        }

        if (modifScore === null || modifScore === undefined) {
            throw new Error('Required parameter modifScore was null or undefined when calling patchScore.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (modifScore !== undefined && modifScore !== null) {
            queryParameters = queryParameters.set('modifScore', <any>modifScore);
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

        return this.httpClient.request<InformativeMessage>('put',`${this.basePath}/teams/${encodeURIComponent(String(teamId))}/score`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
