// Load modules


var classification = require('./routes.js');

// API Server Endpoints
exports.endpoint = [

    { method: 'GET',  path: '/getClassificationAttributeHost', config: classification.getClassificationAttributeHost },
    { method: 'POST', path: '/api/classificationSearch', config: classification.classificationPOST},
    { method: 'POST', path: '/api/classificationGroupSearch', config: classification.classificationPOST},
    { method: 'POST', path: '/api/attributeSearch', config: classification.classificationPOST},
    { method: 'POST', path: '/api/attributeSectionSearch', config: classification.classificationPOST},
    { method: 'POST', path: '/api/attributeList', config: classification.classificationPOST},
    { method: 'GET',  path: '/api/attribute/{id}', config: classification.classificationGET}
];