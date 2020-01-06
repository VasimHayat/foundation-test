export interface FnSession {
    ssPK?: number;
    sccPK: number;
    scaPK: number;
    saPK: number;
    scPK: number;
    scuPK: number;
    sauPK: number;
    wIndex?: number;
    pid?: string;
    pmid?: string;
    mid?: string;
    sgaPK?: number;
    baseUrl?: string;
}
export interface FnSessionState {
    currentSession: FnSession;
    error: string;
}
