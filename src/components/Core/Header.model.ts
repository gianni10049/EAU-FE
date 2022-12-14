export interface menuVoiceInterface {
	buttonText: any;
	onClick?: any;
	onMouseEnter?: any;
	icon?: any;
}

export interface subMenuVoiceInterface {
	children: any;
	actualSubMenu: string;
	menuOpenedOn: string;
	title: string;
}

export interface navLinkInterface {
	hovered: boolean;
	onMouseEnter: any;
	onMouseLeave: any;
	current_url: boolean;
	label: string;
}
