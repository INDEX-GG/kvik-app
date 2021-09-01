import { ReactElement } from "react";

export interface Child  {
	children: ReactElement;
}

export interface themeShema {
    bg: '#fff' | '#000';
    text: '#000' | '#fff';
}