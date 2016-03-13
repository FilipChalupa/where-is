var geo = {
    angle : function (lat1, lng1, lat2, lng2) {
        var dLon = this.degToRad(lng2-lng1);
        var y = Math.sin(dLon) * Math.cos(this.degToRad(lat2));
        var x = Math.cos(this.degToRad(lat1)) * Math.sin(this.degToRad(lat2)) - Math.sin(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) * Math.cos(dLon);
        var brng = this.radToDeg(Math.atan2(y, x));
        return ((brng + 360) % 360);
    },
    degToRad : function(angle) {
         return angle * Math.PI / 180;
    },
    radToDeg : function(angle) {
        return angle * 180 / Math.PI;
    },
}

module.exports = geo
