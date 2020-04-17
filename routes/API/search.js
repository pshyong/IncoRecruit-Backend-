var express = require('express');
var router = express.Router({
    mergeParams: true,
    strict: true
});
const bodyParser = require('body-parser');

const search = require("./search/search");

router.route('/')
    /**
     *  @swagger
     * 
     *  /search:
     *      post:
     *          description: Search for candidates by skill
     *          tags:
     *              - Employer
     *              - Search
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: skills
     *                description: Array of skills to query by
     *                in: formData
     *                requried: true
     *                type: array
     *                items: {}
     * 
     *          responses:
     *              200:
     *                  description: Successfully searches and returns resumes
     *              400:
     *                  description: Failed to search
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .post(search.searchCandidates);

    router.route('/skills')
    /**
     *  @swagger
     * 
     *  /search/skill/search?q={q}&?limit={limit}:
     *      get:
     *          description: Search the predefiled skills table based on query
     *          tags:
     *              - Jobseeker, skills
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: uid
     *                description: The UID of the jobseeker
     *                in: path
     *                required: true
     *                type: string
     *              - name: q
     *                description: The requested query
     *                in: query
     *                requried: true
     *                type: string
     *              - name: limit
     *                description: The requested query
     *                in: query
     *                requried: true
     *                type: integer
     * 
     *          responses:
     *              200:
     *                  description: Successfully returned all matching string
     *              400:
     *                  description: Field incorrect
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .get(skill.searchSkill)

    module.exports = router;