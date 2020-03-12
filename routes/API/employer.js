var express = require('express');
var router = express.Router({
    mergeParams: true,
    strict: true
});
const bodyParser = require('body-parser');

const basic = require('./employer/basic');
const job = require('./employer/job');

router.route('/?:uid?')
    /**
     *  @swagger
     * 
     *  /employer:
     *      post:
     *          description: Create an employer
     *          tags:
     *              - Employer
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: firebaseID
     *                description: FirebaseID generated by Firebase
     *                in: formData
     *                requried: true
     *                type: string
     *              - name: email
     *                description: E-mail of the employer
     *                in: formData
     *                requried: true
     *                type: string
     *              - name: name
     *                description: Name of the employer
     *                in: formData
     *                requried: true
     *                type: string
     *              - name: company
     *                description: Id of the company
     *                in: formData
     *                requried: true
     *                type: string
     * 
     *          responses:
     *              200:
     *                  description: Successfully created an employer
     *              400:
     *                  description: User could not be created
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .post(basic.createEmployer)
    /**
     *  @swagger
     * 
     *  /employer/{uid}:
     *      get:
     *          description: Returns information about specified jobseeker
     *          tags:
     *              - Employer
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: uid
     *                description: UID for the specific user
     *                in: path
     *                requried: true
     *                type: string
     * 
     *          responses:
     *              200:
     *                  description: Successfully get the Jobseeker
     *              400:
     *                  description: User could not be found
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .get(basic.getEmployer)
    /**
     *  @swagger
     * 
     *  /employer/{uid}:
     *      put:
     *          description: Modify information of specified employer; NOTE! YOU MUST PASS EVERYTHING ELSE AS BODY
     *          tags:
     *              - Employer
     *          produces: 
     *              - application/json
     *          parameters:
     *              - name: uid
     *                description: UUID of the corresponding employer
     *                in: path
     *                requried: true
     *                type: string
     *              - name: name
     *                description: The new name for the employer
     *                in: formData
     *                requried: false
     *                type: string
     *              - name: email_address
     *                description: The new e-mail of the employer
     *                in: formData
     *                requried: false
     *                type: string
     *              - name: phone_number
     *                description: The new phone number the employer
     *                in: formData
     *                requried: false
     *                type: string
     *              - name: location
     *                description: The new location of the employer
     *                in: formData
     *                requried: false
     *                type: string
     *          responses:
     *              200:
     *                  description: Successfully modified the employer
     *              400:
     *                  description: User could not be found
     *              500:
     *                  description: Internal server error
     * 
     * 
     */
    .put(basic.updateEmployer)

router.route('/:uid/jobs/?')
    /**
    *   @swagger
    * 
    *   /employer/{uid}/jobs:
    *       get:
    *           description: Get all the jobs for an employer
    *           tags:
    *               - Employer | Job
    *           produces:
    *               - application/json
    *           parameters:
    *               - name: uid
    *                 description: The uid of the employer of target
    *                 in: path
    *                 required: true
    *                 type: string
    *           responses:
    *               200:
    *                   description: Successfully returned back the all the job
    *               400:
    *                   description: One of the supplied argument does not follow our syntax
    *               404:
    *                   description: No job found or no employer is found
    *               422:
    *                   description: Information missing
    *               500:
    *                   description: There is an error in the backend
    *               
    */
    .get(job.getAllJob)

router.route('/:uid/jobs/?:job_id?')
    /**
    *   @swagger
    * 
    *   /employer/{uid}/jobs/{job_id}:
    *       get:
    *           description: Get a specific job for an employer
    *           tags:
    *               - Employer | Job
    *           produces:
    *               - application/json
    *           parameters:
    *               - name: uid
    *                 description: The uid of the employer of target
    *                 in: path
    *                 required: true
    *                 type: string
    *               - name: job_id
    *                 description: The ID of the job of target
    *                 in: path
    *                 required: true
    *                 type: string
    *           responses:
    *               200:
    *                   description: Successfully returned back the specified job
    *               400:
    *                   description: One of the supplied argument does not follow our syntax
    *               404:
    *                   description: No job found or no employer is found
    *               422:
    *                   description: Information missing
    *               500:
    *                   description: There is an error in the backend
    *               
    */
    .get(job.getJob)
    /**
    *   @swagger
    * 
    *   /employer/{uid}/jobs:
    *       get:
    *           description: Get a specific job for an employer
    *           tags:
    *               - Employer | Job
    *           produces:
    *               - application/json
    *           parameters:
    *               - name: uid
    *                 description: The uid of the employer of target
    *                 in: path
    *                 required: true
    *                 type: string
    *               - name: job_id
    *                 description: The ID of the job of target
    *                 in: path
    *                 required: true
    *                 type: string
    *           responses:
    *               200:
    *                   description: Successfully returned back the specified job
    *               400:
    *                   description: One of the supplied argument does not follow our syntax
    *               404:
    *                   description: No job found or no employer is found
    *               422:
    *                   description: Information missing
    *               500:
    *                   description: There is an error in the backend
    *               
    */
    .post(job.addJob);

module.exports = router;