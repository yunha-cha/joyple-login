import type { CONTACT_LINKS } from "../constants/lang";

export type EmailValid = {
    emailError :string;
    isValid :boolean | null;
}

/**
 * login03 페이지
 */
// 언어 타입 'KO' | 'EN' | 'JP' | 'ZH' | 'ZT' | 'RU' | 'FR' | 'DE' | 'AR'
export type Lang = keyof typeof CONTACT_LINKS;
// 게임 종류 'potc' | 'gbtw'
export type Game = keyof typeof CONTACT_LINKS[Lang];