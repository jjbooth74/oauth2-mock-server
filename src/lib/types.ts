import { JWK } from 'jose/types';
export type { JWK } from 'jose/types';

export interface TokenRequest {
  scope?: string;
  grant_type: string;
  username?: unknown;
  client_id?: unknown;
  code?: string;
}

export interface Options {
  host?: string;
  port: number;
  keys: JWK[];
  saveJWK: boolean;
}

export interface MutableAuthorizeRedirectUri {
  url: URL;
}

export interface MutableToken {
  header: Header;
  payload: Payload;
}

export interface Header {
  kid: string;
  [key: string]: unknown;
}

export interface Payload {
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  [key: string]: unknown;
}

export interface StatusCodeMutableResponse {
  statusCode: number;
}

export interface MutableResponse extends StatusCodeMutableResponse {
  body: Record<string, unknown> | '';
}

export type ScopesOrTransform = string | string[] | JwtTransform;

export interface JwtTransform {
  (header: Header, payload: Payload): void;
}

export enum PublicEvents {
  BeforeTokenSigning = 'beforeTokenSigning',
  BeforeResponse = 'beforeResponse',
  BeforeUserinfo = 'beforeUserinfo',
  BeforeRevoke = 'beforeRevoke',
  BeforeAuthorizeRedirect = 'beforeAuthorizeRedirect',
}

export enum InternalEvents {
  BeforeSigning = 'beforeSigning',
}

export interface TokenBuildOptions {
  /**
   * The 'kid' of the key that will be used to sign the JWT.
   * If omitted, the next key in the round - robin will be used.
   */
  kid?: string;

  /**
   * A scope, array of scopes, or JWT transformation callback.
   */
  scopesOrTransform?: ScopesOrTransform;

  /**
   * Time in seconds before the JWT to expire. Default: 3600 seconds.
   */
  expiresIn?: number;
}
