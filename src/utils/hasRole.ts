import { GuildMember } from "discord.js";

export function hasRole(member: GuildMember | null, role: string) {
	return member?.roles.cache.find((r) => r.id === role);
}
