import { Document, model, Schema } from "mongoose";

export interface SettingsSchemaType extends Document {
	spamming: boolean;
	roles: number[]
}

export const SettingsSchema = new Schema<SettingsSchemaType>({
	spamming: Boolean,
	roles: [Number]
});

export const SettingsModel = model("astra-bot-setting", SettingsSchema);
