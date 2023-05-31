export = InteractionOptions;
/**
 * Create a formatted Interaction Options Object
 * @return {InteractionOptions}
 * @example
 * const subCommandOption = interaction.options.getSubCommand(); // returns the subcommand option
 * const subCommandGroupOption = interaction.options.getSubCommandGroup(); // returns the subcommand group option
 * const stringOption = interaction.options.getStringOption("optionName"); // returns the string option
 * const integerOption = interaction.options.getIntegerOption("optionName"); // returns the integer option
 * const booleanOption = interaction.options.getBooleanOption("optionName"); // returns the boolean option
 * const userOption = interaction.options.getUserOption("optionName"); // returns the user option
 * const memberOption = interaction.options.getMemberOption("optionName"); // returns the member option
 * const channelOption = interaction.options.getChannelOption("optionName"); // returns the channel option
 * const roleOption = interaction.options.getRoleOption("optionName"); // returns the role option
 * const numberOption = interaction.options.getNumberOption("optionName"); // returns the number option
 * const mentionableOption = interaction.options.getMentionableOption("optionName"); // returns the mentionable option
 */
declare class InteractionOptions {
    constructor(options: any);
    /**
     * the interaction option data
     * @type {object[]}
     */
    data: object[];
    /**
     * Get the interaction option "Sub Command"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const subCommandOption = interaction.options.getSubCommand(); // returns the subcommand
     */
    getSubCommand(): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Sub Command Group"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const subCommandGroupOption = interaction.options.getSubCommandGroup(); // returns the subcommand group
     */
    getSubCommandGroup(): InteractionOptionsType.structure;
    /**
     * Get the interaction option "String"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const stringOption = interaction.options.getStringOption("optionName"); // returns the string
     */
    getStringOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "String"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const integerOption = interaction.options.getIntegerOptionOption("optionName"); // returns the integer
     */
    getIntegerOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Boolean"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const booleanOption = interaction.options.getBooleanOption("optionName"); // returns the boolean
     */
    getBooleanOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "User"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const userOption = interaction.options.getUserOption("optionName"); // returns the user
     */
    getUserOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Channel"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const channelOption = interaction.options.getChannelOption("optionName"); // returns the channel
     */
    getChannelOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Role"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const roleOption = interaction.options.getRoleOption("optionName"); // returns the role
     */
    getRoleOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Mentionable"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const mentionableOption = interaction.options.getMentionableOption("optionName"); // returns the mentionable
     */
    getMentionableOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Number"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const numberOption = interaction.options.getNumberOption("optionName"); // returns the number
     */
    getNumberOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction option "Attachment"
     * @property {string} name - The name of the option
     * @return {InteractionOptionsType.structure}
     * @example
     * const attachmentOption = interaction.options.getAttachmentOption("optionName"); // returns the attachment
     */
    getAttachmentOption(name: any): InteractionOptionsType.structure;
    /**
     * Get the interaction options
     * @return {object[]}
     * @example
     * const options = interaction.options.getOptions(); // returns the options
     */
    getOptions(): object[];
}
//# sourceMappingURL=InteractionOptions.d.ts.map