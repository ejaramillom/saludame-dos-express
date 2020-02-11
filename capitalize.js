function capitalize(s){
    return s.toLowerCase().replace( /\b./g, function(a){ return a.toUpperCase(); } );
};

module.exports.capitalize = capitalize;
