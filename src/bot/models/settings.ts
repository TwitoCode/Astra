import { Document, model, Schema } from "mongoose";

export interface SettingsSchemaType extends Document {
	spamming: boolean;
}

export const SettingsSchema = new Schema<SettingsSchemaType>({
	spamming: Boolean,
});

export const SettingsModel = model("astra-bot-setting", SettingsSchema);
