"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Series = exports.Movie = exports.DetailedContent = void 0;
exports.findItemById = findItemById;
const models_1 = require("./models");
class DetailedContent {
    id;
    title;
    releaseDate;
    _type;
    constructor(id, title, releaseDate, type) {
        this.id = id;
        this.title = title;
        this.releaseDate = releaseDate;
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(_) {
        throw new Error("Content type is immutable");
    }
}
exports.DetailedContent = DetailedContent;
class Movie extends DetailedContent {
    director;
    constructor(id, title, releaseDate, direcor) {
        super(id, title, releaseDate, models_1.ContentType.Movie);
        this.director = direcor;
    }
    getDetails() {
        return `[MOVIE] "${this.title}" directed by ${this.director} (Released: ${String(this.releaseDate.getDate()).padStart(2, "0")}/${String(this.releaseDate.getMonth() + 1).padStart(2, "0")}/${String(this.releaseDate.getFullYear())})`;
    }
}
exports.Movie = Movie;
class Series extends DetailedContent {
    platformUrl;
    constructor(id, title, releaseDate, platformUrl) {
        super(id, title, releaseDate, models_1.ContentType.Series);
        this.platformUrl = platformUrl;
    }
    getDetails() {
        return `[SERIES] "${this.title}" (Released: ${String(this.releaseDate.getDate()).padStart(2, "0")}/${String(this.releaseDate.getMonth() + 1).padStart(2, "0")}/${String(this.releaseDate.getFullYear())}), available at: ${this.platformUrl}`;
    }
}
exports.Series = Series;
function findItemById(arr, id) {
    return arr.find((item) => item.id === id);
}
