import { GuildMember } from "discord.js";

export function hasRole(member: GuildMember | null, roles: number | number[]) {
	const memberRoles = member!.roles.cache;

	if (Array.isArray(roles)) {
		for (const r of memberRoles.map((role) => role)) {
			return roles.includes(parseInt(r.id));
		}
	}

	return memberRoles.find((r) => r.id === roles.toString());
}
