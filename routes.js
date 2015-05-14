// Load modules


   var classificationData = require('./index');

// API Server Endpoints
exports.endpoint = [

    { method: 'GET',  path: '/getClassificationAttributeHost', config: classificationData.getClassificationAttributeHost },
    { method: 'POST', path: '/api/classificationSearch', config: classificationData.classificationPOST},
    { method: 'POST', path: '/api/classificationGroupSearch', config: classificationData.classificationPOST},
    { method: 'POST', path: '/api/attributeSearch', config: classificationData.classificationPOST},
    { method: 'POST', path: '/api/attributeSectionSearch', config: classificationData.classificationPOST},
    { method: 'POST', path: '/api/attributeList', config: classificationData.classificationPOST},
    { method: 'GET',  path: '/api/attribute/{id}', config: classificationData.classificationGET}
];