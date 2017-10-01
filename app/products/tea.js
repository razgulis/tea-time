"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tea = (function () {
    function Tea(teaId, teaName, teaType, teaDescription, teaRating, teaRatingVotes, teaAvailability, imageUrl) {
        this.teaId = teaId;
        this.teaName = teaName;
        this.teaType = teaType;
        this.teaDescription = teaDescription;
        this.teaRating = teaRating;
        this.teaRatingVotes = teaRatingVotes;
        this.teaAvailability = teaAvailability;
        this.imageUrl = imageUrl;
    }
    Tea.prototype.upvoteReorder = function () {
    };
    return Tea;
}());
exports.Tea = Tea;
//# sourceMappingURL=tea.js.map