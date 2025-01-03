/**
 * The event.data for the event `$internal-sw-req-fail` that is dispatched when a SW Proxy fails to fetch a resource and instead the handler throws an error 
 */
export interface SwHandlerErroredOutData {
	/**
	 * The name of the *SW Proxy* that failed (if unknown set to a blank string `""`)
	 * */
	proxyName: string;
	/**
	 * The proxy URL that the SW Proxy was trying to fetch (if unknown set to a blank string `""`)
	 */
	proxyUrl: string;
	/**
	 * The error message (if unknown set to a blank string `""`)
	 * */
	error: string;
	/**
	 * The error code (if not applicable set it to `0`)
	 */
	errorCode: number;
	/**
	 * The the `FetchEvent`
	 */
	fetchEvent: string;
}

export interface SwHandlerSucceeds {
	/**
	 * The name of the *SW Proxy* that was used (if unknown set to a blank string `""`)
	 * */
	proxyName: string;
	/**
	 * The proxy URL that the SW Proxy fetched (if unknown set to a blank string `""`)
	 */
	proxyUrl: string;
	/**
	 * The the `FetchEvent`
	 */
	fetchEvent: string;
}