const express = require('express');
const router = express.Router({
    mergeParams: true,
    strict: true
});
const bodyParser = require('body-parser');

const basic = require('./universal/basic');

router.route('/?')
    /**
     *  @swagger
     * 
     *  /init:
     *      post:
     *          description: Get either the jobseeker or employer's pre-information if exists
     *          tags:
     *              - Initialization
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: firebaseID
     *                description: FirebaseID generated by Firebase
     *                in: formData
     *                requried: true
     *                type: string 
     *          responses:
     *              200:
     *                  description: Successfully get an employer/jobseeker
     *              400:
     *                  description: User could not be found
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .post(basic.init);

/**
 *  @swagger
 * 
 *  /init/getAll:
 *      get:
 *          description: Get all users in database (Mainly to get firebaseID so we can easily test)
 *          tags:
 *              - Get all
 *          produces: 
 *              - application/json
 *          responses:
 *              200:
 *                  description: Successfully get an employer/jobseeker
 *              400:
 *                  description: User could not be found
 *              500:
 *                  description: Internal server error
 * 
 * 
 */
router.get('/getAll', basic.getAllUsers);

module.exports = router;