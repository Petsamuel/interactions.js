const Utils = require("../utils/Utils.js");
const Util = new Utils();

/**
* Create a custom embed
* 
* @example
* ```js
* const embed = new Embed()
* .setTitle('This is a Title')
* .setURL('https://github.com/fb-sean/interactions.js')
* .setColor('#31B505')
* .setAuthor("This is a Author", null, "https://github.com/fb-sean/interactions.js");
* ```
*/
class Embed {
    constructor() {
        super();
        this.color = null,
            this.title = null,
            this.url = null,
            this.author = {
                name: null,
                icon_url: null,
                url: null,
            },
            this.description = null,
            this.thumbnail = {
                url: null,
            },
            this.fields = [],
            this.image = {
                url: true,
            },
            this.timestamp = null,
            this.footer = {
                text: null,
                icon_url: null,
            }
    }

    /**
	 * Sets the title of this embed
	 *
	 * @param {String} title The title
	 */
    setTitle(title) {
        if (!title || typeof title != String) {
            throw new Error("[Interactions.js => <Embed>.setTitle] The Title need to be a string.");
        }

        this.title = title;
        return this;
    }

    /**
	 * Sets the URL of this embed
	 *
	 * @param {String} url The URL
	 */
    setURL(url) {
        if (!Util.checkURL(url)) {
            throw new Error("[Interactions.js => <Embed>.setURL] The URL isn't a valid URL. (Need to start with 'http' or 'https')");
        }

        this.url = url;
        return this;
    }

    /**
	 * Sets the color of this embed
	 *
	 * @param {String} color The color of the embed
	 */
    setColor(color) {
        if (!color) {
            throw new Error("[Interactions.js => <Embed>.setColor] You need to provide a color.");
        }

        this.color = Util.resolveColor();
        return this;
    }

    /**
	 * Sets the author of this embed
	 *
	 * @param {String} name The name for the author
     * @param {String} iconUrl The icon url for the author
     * @param {String} url The url for the author
	 */
    setAuthor(name, iconUrl, url) {
        if (!name || typeof name != String) {
            throw new Error("[Interactions.js => <Embed>.setAuthor] The Author Name need to be a String.");
        }

        if (url && !Util.checkURL(url)) {
            throw new Error("[Interactions.js => <Embed>.setAuthor] The Author URL isn't a valid URL. (Need to start with 'http' or 'https')");
        }

        if (iconUrl && !Util.checkURL(iconUrl)) {
            throw new Error("[Interactions.js => <Embed>.setAuthor] The Author Icon URL isn't a valid URL. (Need to start with 'http' or 'https')");
        }

        this.author = {
            name: name ?? null,
            icon_url: iconUrl ?? null,
            url: url ?? null,
        };
        return this;
    }

    /**
	 * Sets the description of this embed
	 *
	 * @param {String} description The description
	 */
    setDescription(desc) {
        if (!desc || typeof desc != String) {
            throw new Error("[Interactions.js => <Embed>.setDescription] The Description need to be a String.");
        }

        if (desc.length > 4096) {
            throw new Error("[Interactions.js => <Embed>.setDescription] The Description is too long (4096 is the max length).");
        }

        this.description = desc;
        return this;
    }

    /**
	 * Sets the thumbnail of this embed
	 *
	 * @param {String} url The URL of the thumbnail
	 */
    setThumbnail(url) {
        if (!url || !Util.checkURL(url, true)) {
            throw new Error("[Interactions.js => <Embed>.setThumbnail] The Thumbnail isn't a valid Image URL. (Need to start with 'attachment', 'http' or 'https')");
        }


        this.thumbnail = {
            url: url,
        };
        return this;
    }

    /**
	 * Sets the embed's fields
	 *
	 * You can set a maximum of 25 fields.
	 *
	 * @param {Array} fields The fields to set
	 */
    setFields(ArrayOfFields) {
        if (!ArrayOfFields || typeof ArrayOfFields != Array) {
            throw new Error("[Interactions.js => <Embed>.setFields] The input need to be an array.");
        }

        if (ArrayOfFields.length >= 25) {
            throw new Error("[Interactions.js => <Embed>.addFields] You try to set an array that is over max fields value. [max 25 fields]");
        }

        const wrongFields = [];
        for (const i = 0; i < ArrayOfFields.length; i++) {
            const field = ArrayOfFields[i];

            let noName = false;
            if (!field?.name || typeof field?.name != String) {
                noName = true;
            }

            let noValue = false;
            if (!field?.value || typeof field?.value != String) {
                noValue = true;
            }


            if (noValue || noName) {
                wrongFields.push(`${i}`);
            }
        }

        if (wrongFields.length > 0) {
            throw new Error("[Interactions.js => <Embed>.setFields] Found some problems in the Array at postition: " + wrongFields.join(", ") + ".");
        }

        this.fields = ArrayOfFields;
        return this;
    }

    /**
	 * Appends fields to the embed
	 *
     * You can have a maximum of 25 fields.
     * 
	 * @example
	 * ```js
	 * const embed = new Embed()
	 * 	.addFields(ArrayOfFields);
	 * ```
	 *
	 * @param {Array} fields The fields to add
	 */
    addFields(ArrayOfFields) {
        if (!ArrayOfFields || typeof ArrayOfFields != Array) {
            throw new Error("[Interactions.js => <Embed>.setFields] The input need to be an array.");
        }

        if (this.fields.length >= 25) {
            throw new Error("[Interactions.js => <Embed>.addFields] This embed reached the max value for fields. [max 25 fields]");
        }

        if ((this.fields.length + ArrayOfFields.length) >= 25) {
            throw new Error("[Interactions.js => <Embed>.addFields] By adding this array it would go over the max value of fields. [max 25 fields]");
        }

        const wrongFields = [];
        for (const i = 0; i < ArrayOfFields.length; i++) {
            const field = ArrayOfFields[i];

            let noName = false;
            if (!field?.name || typeof field?.name != String) {
                noName = true;
            }

            let noValue = false;
            if (!field?.value || typeof field?.value != String) {
                noValue = true;
            }


            if (noValue || noName) {
                wrongFields.push(`${i}`);
            }
        }

        if (wrongFields.length > 0) {
            throw new Error("[Interactions.js => <Embed>.addFields] Found some problems in the Array at postition: " + wrongFields.join(", ") + ".");
        }

        this.fields = this.fields.concat(ArrayOfFields);
        return this;
    }

    /**
	 * Add a field to the embed
	 *
	 * You can have a maximum of 25 fields.
	 *
	 * @param {String} name The field name
     * @param {String} value The field value
     * @param {Boolean} inline boolean if the embed should be inline
	 */
    addField(name, value, inline = false) {
        if (this.fields.length >= 25) {
            throw new Error("[Interactions.js => <Embed>.addField] This embed reached the max value for fields. [max 25 fields]");
        }

        if (!name || typeof name != String) {
            throw new Error("[Interactions.js => <Embed>.addField] The Field Name need to be a string.");
        }

        if (!value || typeof value != String) {
            throw new Error("[Interactions.js => <Embed>.addField] The Field Value need to be a string.");
        }

        this.fields = this.fields.concat([{
            name,
            value,
            inline
        }, ]);
        return this;
    }

    /**
	 * Sets the image of this embed
	 *
	 * @param {String} url The URL of the image
	 */
    setImage(url) {
        if (!url || !Util.checkURL(url, true)) {
            throw new Error("[Interactions.js => <Embed>.setImage] The Image isn't a valid Image URL. (Need to start with 'attachment', 'http' or 'https')");
        }


        this.image = {
            url: url,
        };
        return this;
    }

    /**
     * Sets the timestamp of this embed
     *
     * @param {String} timestamp The timestamp or date
     */
    setTimestamp(timestamp) {
        if (!timestamp) timestamp = new Date();

        this.timestamp = timestamp ? new Date(timestamp).toISOString() : undefined;
        return this;
    }

    /**
	 * Sets the footer of this embed
	 *
	 * @param {String} name The name for the footer
     * @param {String} iconUrl The iconUrl for the footer
	 */
    setFooter(name, iconUrl) {
        if (!name || typeof name != String) {
            throw new Error("[Interactions.js => <Embed>.setAuthor] The Author Name need to be a String.");
        }

        if (iconUrl && !Util.checkURL(iconUrl)) {
            throw new Error("[Interactions.js => <Embed>.setAuthor] The Author Icon URL isn't a valid URL. (Need to start with 'http' or 'https')");
        }

        this.footer = {
            name: name ?? null,
            icon_url: iconUrl ?? null,
        };
        return this;
    }
}

module.exports = Embed;