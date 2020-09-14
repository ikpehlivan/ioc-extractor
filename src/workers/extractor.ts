import { expose } from "threads/worker";

import {
  extractASN,
  extractBTC,
  extractCVE,
  extractDomain,
  extractEmail,
  extractGAPubID,
  extractGATrackID,
  extractIPv4,
  extractIPv6,
  extractMacAddress,
  extractMD5,
  extractSHA1,
  extractSHA256,
  extractSHA512,
  extractSSDEEP,
  extractURL,
  extractXMR,
} from "../aux/extractor";

const extractor = {
  extractASN(text: string): string[] {
    return extractASN(text);
  },
  extractBTC(text: string): string[] {
    return extractBTC(text);
  },
  extractCVE(text: string): string[] {
    return extractCVE(text);
  },
  extractDomain(text: string): string[] {
    return extractDomain(text);
  },
  extractEmail(text: string): string[] {
    return extractEmail(text);
  },
  extractGAPubID(text: string): string[] {
    return extractGAPubID(text);
  },
  extractGATrackID(text: string): string[] {
    return extractGATrackID(text);
  },
  extractIPv4(text: string): string[] {
    return extractIPv4(text);
  },
  extractIPv6(text: string): string[] {
    return extractIPv6(text);
  },
  extractMacAddress(text: string): string[] {
    return extractMacAddress(text);
  },
  extractMD5(text: string): string[] {
    return extractMD5(text);
  },
  extractSHA1(text: string): string[] {
    return extractSHA1(text);
  },
  extractSHA256(text: string): string[] {
    return extractSHA256(text);
  },
  extractSHA512(text: string): string[] {
    return extractSHA512(text);
  },
  extractSSDEEP(text: string): string[] {
    return extractSSDEEP(text);
  },
  extractURL(text: string): string[] {
    return extractURL(text);
  },
  extractXMR(text: string): string[] {
    return extractXMR(text);
  },
};

export type Extractor = typeof extractor;

expose(extractor);
