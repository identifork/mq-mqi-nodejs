declare module 'ibmmq' {

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCBC
 * (MQ CallBack Context) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q094330_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQCBC {
    /** @member {number}
     */
    CallType: number;
    /** @member {number}
     */
    State: number;
    /** @member {number}
     */
    DataLength: number;
    /** @member {number}
     */
    BufferLength: number;
    /** @member {number}
     */
    Flags: number;
    /** @member {number}
     */
    ReconnectDelay: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCBD
 * (MQ CallBack Descriptor) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q094540_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQCBD {
    /** @member {number}
     */
    CallbackType: number;
    /** @member {number}
     */
    Options: number;
    /** @member {String}
     */
    CallbackArea: string;
    /** @member {String}
     */
    CallbackFunction: string;
    /** @member {String}
     */
    CallbackName: string;
    /** @member {number}
     */
    MaxMsgLength: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCD
 * (MQ Channel Definition) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q108220_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQCD {
    /** @member {String}
     */
    ChannelName: string;
    /** @member {String}
     */
    ConnectionName: string;
    /** @member {number}
     */
    DiscInterval: number;
    /** @member {String}
     */
    SecurityExit: string;
    /** @member {String}
     */
    SecurityUserData: string;
    /** @member {number}
     */
    MaxMsgLength: number;
    /** @member {number}
     */
    HeartbeatInterval: number;
    /** @member {String}
     */
    SSLCipherSpec: string;
    /** @member {String}
     */
    SSLPeerName: string;
    /** @member {number}
     */
    SSLClientAuth: number;
    /** @member {number}
     */
    KeepAliveInterval: number;
    /** @member {number}
     */
    SharingConversations: number;
    /** @member {number}
     */
    PropertyControl: number;
    /** @member {number}
     */
    ClientChannelWeight: number;
    /** @member {number}
     */
    ConnectionAffinity: number;
    /** @member {number}
     */
    DefReconnect: number;
    /** @member {String}
     */
    CertificateLabel: string;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCNO
 * (MQ Connection Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q095410_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQCNO {
    /** @member {number}
     */
    Options: number;
    /** @member {MQCSP}
     */
    SecurityParms: MQCSP;
    /** @member {String}
     */
    CCDTUrl: string;
    /** @member {MQCD}
     */
    ClientConn: MQCD;
    /** @member {MQSCO}
     */
    SSLConfig: MQSCO;
    /** @member {string}
     */
    ApplName: string;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCSP
 * (MQ Connection Security Parameters) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q095610_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object. For example,
 * unlike the regular MQI, we don't bother exposing the authenticationType
 * attribute, as there's currently only one value other than none - and setting
 * the userid and password implies you want to use it.
 */
class MQCSP {
    /** @member {String}
     */
    UserId: string;
    /** @member {String}
     */
    Password: string;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCTLO
 * (MQ Control Callback Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q095800_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQCTLO {
    /** @member {number}
     */
    Options: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the mqdlh
 * (MQ Dead Letter Header) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q096110_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQDLH {
    /** @member {number}
     */
    Reason: number;
    /** @member {String}
     */
    DestQName: string;
    /** @member {String}
     */
    DestQMgrName: string;
    /** @member {number}
     */
    Encoding: number;
    /** @member {number}
     */
    CodedCharSetId: number;
    /** @member {Buffer}
     */
    Format: Buffer;
    /** @member {number}
     */
    PutApplType: number;
    /** @member {String}
     */
    PutApplName: string;
    /** @member {String}
     */
    PutDate: string;
    /** @member {String}
     */
    PutTime: string;
    /** @member {number}
     */
    StrucLength: number;
    /**
     * The getBuffer function returns a version of the structure that can
     * be part of the message data when it is put to a queue. Use in conjunction
     * with Buffer.concat() to combine the buffers into a single buffer.
     */
    getBuffer(): void;
    /**
     * The getHeader function returns a JS structure. The StrucLength member
     * can be used to show how far to step through the message buffer for the
     * next element.
     */
    static getHeader(): void;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQGMO
 * (MQ Get Message Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q096710_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 * <p>Note: This sets the FIQ flag by default, which is not standard in the MQI
 * but probably should have been. It's also forced to be set elsewhere.
 */
class MQGMO {
    /** @member {number}
     */
    Options: number;
    /** @member {number}
     */
    WaitInterval: number;
    /** @member {String}
     */
    ResolvedQName: string;
    /** @member {number}
     */
    MatchOptions: number;
    /** @member {string}
     */
    GroupStatus: string;
    /** @member {string}
     */
    SegmentStatus: string;
    /** @member {string}
     */
    Segmentation: string;
    /** @member {Buffer}
     */
    MsgToken: Buffer;
    /** @member {number}
     */
    ReturnedLength: number;
    /** @member {Object}
     */
    MsgHandle: any;
}

/**
 * @static
 * @type Object
 * @todo Can this be documented better?
 *
 * Get some basic definitions. The constants (MQC) will be
 * re-exported for users of this module. The types (MQT) are not
 * exported as they should not be used by anyone else directly.
 */
var MQC: any;

/**
 * setTuningParameters - Override values used to tune behaviour
 * <p>These properties affect the "fairness" heuristics that manage the
 * scheduling of message retrieval in a high-workload system.
 * @param {Object}
 *        parms - Object containing fields for the parameter values to override
 * @property {number} getLoopPollTimeMs - Milliseconds between each full poll cycle.
 * Default is 10000 (10 seconds)
 * @property {number} getLoopDelayTimeMs - Milliseconds to delay after a partial poll cycle.
 * Default is 250 (1/4 second)
 * @property {number} maxConsecutiveGets - How many messages to get from a queue before trying a different queue.
 * Default is 100
 * @property {boolean} syncMQICompat - Make the MQI verbs all use the Synchronous model (the
 * original style for this package).
 * Default is false
 * @property {boolean} debugLog - Turn on debug logging dynamically.
 * Default is false
 * @throws {TypeError}
 *         When the parameter or its properties is of incorrect type
 * @example
 * console.log("Tuning parms are %j",mq.getTuningParameters());
 * mq.setTuningParameters({maxConsecutiveGets:20});
 * console.log("Tuning parms are now %j",mq.getTuningParameters());
 */
function setTuningParameters(parms: any): void;

/**
 * getTuningParameters
 * @return Object containing the current values
 */
function getTuningParameters(): any;

/**
 * MQQueueManager contains the connection to the queue manager. Fields
 * in this object are not meant to be directly referenced by user applications..
 * @class
 */
class MQQueueManager {
    constructor();
}

/**
 * MQObject contains a reference to an open object and the associated
 * queue manager. Fields in this object are not meant to be directly referenced
 * by user applications. Combining hConn and hObj in a single object means
 * we can simplify the API.
 * @class
 */
class MQObject {
    constructor();
}

/**
 * MQAttr contains information about object attributes used in Set (MQSET)
 * and Inq (MQINQ) operations.
 * @class
 */
class MQAttr {
    /** The MQIA/MQCA selector value. For example MQIA_INHIBIT_PUT
      @member {number}
     */
    selector: number;
    /**
      The "value" is optional in the constructor when making Inq() calls.
      @member {Object}
     */
    value: any;
}

interface MQError extends Error {
}

/**
 * MQError holds the MQRC and MQCC values returned from an MQI verb.
 * For convenience, it also holds the name of the verb that failed.
 * It is a subclass of Error(). A pre-formatted error message is available
 * from this class, but individual fields are also accessible for applications that
 * want to handle errors fully themselves.
 * @class
 * @implements {Error}
 */
class MQError implements Error {
    constructor();
    /** @member {number}
     */
    mqcc: number;
    /** @member {String}
     */
    mqccstr: string;
    /** @member {number}
     */
    mqrc: number;
    /** @member {String}
     */
    mqrcstr: string;
    /** @member {String}
     */
    version: string;
    /** @member {String}
     */
    verb: string;
}

/**
 * check if context is still available
 */
function isContextAvailable(): void;

/**
 * Lookup returns the string corresponding to a value. For example,
 * convert 2195 to MQRC_UNEXPECTED_ERROR.
 *
 * <p>Note: Unlike the Java equivalent, this does not accept regular expressions
 * for the range. It must be an explicit value.
 *
 * @param {String}
 *        range - eg "MQRC" or "MQIA"
 * @param {Number}
 *        value - the value to convert
 * @return {String} The string or null if no matching value or range.
 *
 */
function Lookup(range: string, value: number): string;

/**
 * ConnxSync - callback is passed object containing the hConn on success.
 *
 * @param {String}
 *        qMgrName - the queue manager to connect to
 * @param {MQCNO}
 *        cno - connection options
 * @param {function}
 *        callback - optional. Invoked for errors and with a reference to the
 *        qmgr connection.
 * @return {MQQueueManager} A reference to the connection
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function ConnxSync(qMgrName: string, cno: MQCNO, callback: (...params: any[]) => any): MQQueueManager;

/**
 * Connx - callback is passed object containing the hConn on success.
 *
 * @param {String}
 *        qMgrName - the queue manager to connect to
 * @param {MQCNO}
 *        cno - connection options
 * @param {function}
 *        callback - Invoked for errors and with a reference to the
 *        qmgr connection.
 * @return {MQQueueManager} A reference to the connection
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Connx(qMgrName: string, cno: MQCNO, callback: (...params: any[]) => any): MQQueueManager;

/**
 * Conn - simpler version of Connx.
 * The callback is passed object containing the hConn on success
 *
 * @param {String}
 *        qMgrName - the queue manager to connect to
 * @param {function}
 *        callback - Invoked for errors and with a reference to
 *        the qmgr connection.
 * @return {MQQueueManager} A reference to the connection
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Conn(qMgrName: string, callback: (...params: any[]) => any): MQQueueManager;

/**
 * ConnSync - simpler version of Connxsync.
 * The callback is passed object containing the hConn on success
 *
 * @param {String}
 *        qMgrName - the queue manager to connect to
 * @param {function}
 *        callback - optional. Invoked for errors and
 *        with a reference to the qmgr connection.
 * @return {MQQueueManager} A reference to the connection
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function ConnSync(qMgrName: string, callback: (...params: any[]) => any): MQQueueManager;

/**
 * DiscSync - Disconnect from the queue manager synchronously.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {function}
 *        callback - optional. Invoked for errors.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function DiscSync(queueManager: MQQueueManager, callback: (...params: any[]) => any): void;

/**
 * Disc - Disconnect from the queue manager.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {function}
 *        callback - optional. Invoked for errors.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Disc(queueManager: MQQueueManager, callback: (...params: any[]) => any): void;

/**
 * OpenSync - Open an object such as a queue or topic synchronously.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQOD}
 *        jsod - MQ Object Descriptor including the name and
 *        type of object to open
 * @param {number}
 *        openOptions - how the object is intended to be used.
 * @param {function}
 *        callback - Required. Invoked for errors and given a
 *        reference to the opened object on success.
 * @return {MQObject} A reference to the opened object (hObj)
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function OpenSync(queueManager: MQQueueManager, jsod: MQOD, openOptions: number, callback: (...params: any[]) => any): MQObject;

/**
 * Open - Open an object such as a queue or topic.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQOD}
 *        jsod - MQ Object Descriptor including the name and
 *        type of object to open
 * @param {number}
 *        openOptions - how the object is intended to be used.
 * @param {function}
 *        callback - Required. Invoked for errors and given a
 *        reference to the opened object on success.
 * @return {MQObject} A reference to the opened object (hObj)
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function Open(queueManager: MQQueueManager, jsod: MQOD, openOptions: number, callback: (...params: any[]) => any): MQObject;

/**
 * CloseSync - Close an opened object synchronously.
 *
 * @param {MQObject}
 *        jsObject - reference to the object (contains hConn and hObj)
 * @param {number}
 *        closeOptions
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameters
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function CloseSync(jsObject: MQObject, closeOptions: number, callback: (...params: any[]) => any): void;

/**
 * Close - Close an opened object.
 *
 * @param {MQObject}
 *        jsObject - reference to the object (contains hConn and hObj)
 * @param {number}
 *        closeOptions
 * @param {function}
 *        callback - Invoked for errors. No additional parameters
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Close(jsObject: MQObject, closeOptions: number, callback: (...params: any[]) => any): void;

/**
 * Stat  - Get status of operations
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {number}
 *        type - type of status being requested (MQSTAT_TYPE_*)
 * @param {function}
 *        callback - optional. Invoked for errors and with the status
 *        response structure.
 * @returns {MQSTS}
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Stat(queueManager: MQQueueManager, type: number, callback: (...params: any[]) => any): MQSTS;

/**
 * Begin - Start a global transaction.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameter
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Begin(queueManager: MQQueueManager, callback: (...params: any[]) => any): void;

/**
 * Cmit - Commit an in-flight transaction.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameter
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Cmit(queueManager: MQQueueManager, callback: (...params: any[]) => any): void;

/**
 * Back - Backout an in-flight transaction.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameter
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Back(queueManager: MQQueueManager, callback: (...params: any[]) => any): void;

/**
 * SubSync - Subscribe to a topic synchronously.
 * <p>If using managed destinations where the queue manager creates a
 * queue on your behalf, the reference to it is given to the callback
 * function.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQObject}
 *        queueObject - the queue to which publications will be
 *        delivered. Can be null to indicate a managed queue should
 *        be allocated.
 * @param {MQSD}
 *        jssd - MQ Subscription Descriptor including the topic to be
 *        subscribed.
 * @param {function}
 *        callback - Required. Invoked for errors. On success, given a
 *        reference to the opened subscription and the opened queue.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function SubSync(queueManager: MQQueueManager, queueObject: MQObject, jssd: MQSD, callback: (...params: any[]) => any): void;

/**
 * Sub - Subscribe to a topic.
 * <p>If using managed destinations where the queue manager creates a
 * queue on your behalf, the reference to it is given to the callback
 * function.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQObject}
 *        queueObject - the queue to which publications will be
 *        delivered. Can be null to indicate a managed queue should
 *        be allocated.
 * @param {MQSD}
 *        jssd - MQ Subscription Descriptor including the topic to be
 *        subscribed.
 * @param {function}
 *        callback - Required. Invoked for errors. On success, given a
 *        reference to the opened subscription and the opened queue.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Sub(queueManager: MQQueueManager, queueObject: MQObject, jssd: MQSD, callback: (...params: any[]) => any): void;

/**
 * Subrq - Request retained publications
 * <p>If using managed destinations where the queue manager creates a
 * queue on your behalf, the reference to it is given to the callback
 * function.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQObject}
 *        subObject - handle representing a subscription made earlier by
 *        a call to the Sub() method.
 * @param {number}
 *        action - what to do
 * @param {MQSRO}
 *        jssro - MQ Subscription Request Options
 * @param {function}
 *        callback - optional. Invoked for errors.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Subrq(queueManager: MQQueueManager, subObject: MQObject, action: number, jssro: MQSRO, callback: (...params: any[]) => any): void;

/**
 * PutSync -  Put a message to a queue or publish to a topic synchronously.
 *
 * @param {MQObject}
 *        jsObject - reference to the opened object (hConn and hObj)
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQPMO}
 *        jspmo - Put Message Options
 * @param {Object}
 *        buf - containing the message contents. Can be a String or Buffer
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameter
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function PutSync(jsObject: MQObject, jsmd: MQMD, jspmo: MQPMO, buf: any, callback: (...params: any[]) => any): void;

/**
 * Put -  Put a message to a queue or publish to a topic.
 *
 * @param {MQObject}
 *        jsObject - reference to the opened object (hConn and hObj)
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQPMO}
 *        jspmo - Put Message Options
 * @param {Object}
 *        buf - containing the message contents. Can be a String or Buffer
 * @param {function}
 *        callback - Invoked for errors. No additional parameter on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Put(jsObject: MQObject, jsmd: MQMD, jspmo: MQPMO, buf: any, callback: (...params: any[]) => any): void;

/**
 * Put1Sync -  Put a message to a queue or publish to a topic synchronously.
 *
 * <p>Put1Sync puts a single messsage to a queue or topic. Typically used
 * for one-shot replies where it can be cheaper than multiple
 * Open/Put/Close sequences
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQOD}
 *        jsod - MQ Object Descriptor including the name and
 *        type of object to open
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQPMO}
 *        jspmo - Put Message Options
 * @param {Object}
 *        buf - containing the message contents. Can be a String or Buffer
 * @param {function}
 *        callback - optional. Invoked for errors. No additional parameter
 *        on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Put1Sync(queueManager: MQQueueManager, jsod: MQOD, jsmd: MQMD, jspmo: MQPMO, buf: any, callback: (...params: any[]) => any): void;

/**
 * Put1 -  Put a message to a queue or publish to a topic.
 *
 * <p>Put1 puts a single messsage to a queue or topic. Typically used
 * for one-shot replies where it can be cheaper than multiple
 * Open/Put/Close sequences
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager (hConn)
 * @param {MQOD}
 *        jsod - MQ Object Descriptor including the name and
 *        type of object to open
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQPMO}
 *        jspmo - Put Message Options
 * @param {Object}
 *        buf - containing the message contents. Can be a String or Buffer
 * @param {function}
 *        callback - Invoked for errors. No additional parameter on success.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Put1(queueManager: MQQueueManager, jsod: MQOD, jsmd: MQMD, jspmo: MQPMO, buf: any, callback: (...params: any[]) => any): void;

/**
 * GetSync -  Get a message from a queue synchronously.
 *
 * <p>Note that this function will block until the MQGET returns.
 *
 * @param {MQObject}
 *        jsObject - reference to the opened object (hConn and hObj)
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQGMO}
 *        jsgmo - Get Message Options
 * @param {Buffer}
 *        buf - to contain the message contents
 * @param {function}
 *        callback - optional. Invoked for errors. Length of returned data
 *        passed on success.
 * @return {number} Length of returned message.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function GetSync(jsObject: MQObject, jsmd: MQMD, jsgmo: MQGMO, buf: Buffer, callback: (...params: any[]) => any): number;

/**
 * Get -  Get a message from a queue asynchronously. Use GetDone()
 * to clear the callback. No data buffer needs to be supplied as input
 * to this function, but message data should be processed or copied
 * before returning from your callback as the buffer may get overwritten
 * by any subsequent message.
 * <p>The callback function is repetitively invoked for each message. You
 * do not need to reset after each retrieval.
 *
 * @param {MQObject}
 *        jsObject - reference to the opened object (hConn and hObj)
 * @param {MQMD}
 *        jsmd - the message Descriptor
 * @param {MQGMO}
 *        jsgmo - Get Message Options
 * @param {function}
 *        callback - Called when messages arrive. Parameters are
 *          (error, MQObject, MQGMO, MQMD, data, MQQueueManager)
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function Get(jsObject: MQObject, jsmd: MQMD, jsgmo: MQGMO, callback: (...params: any[]) => any): void;

/**
 * GetDone -  Stop the Get processing by removing the listener
 * for more messages.
 *
 * @param {MQObject}
 *        jsObject - reference to the opened object (hConn and hObj)
 * @param {function}
 *        callback - Invoked for errors.
 * @throws {MQError}
 *         Container for MQRC and MQCC values
 * @throws {TypeError}
 *         When a parameter is of incorrect type
 */
function GetDone(jsObject: MQObject, callback: (...params: any[]) => any): void;

/**
 * Inq - Inquire on attributes of an object
 *
 * @param {MQObject}
 *        object - reference to the object (hObj)
 * @param {Array.<MQAttr>}
 *        jsSelectors - Array containing the selectors naming the
 *        attributes to look for (MQIA*, MQCA* values). On completion
 *        the array elements are updated with the values.
 * @param {function}
 *        callback - Called when the inquire completes. Parameters are (error, jsSelectors)
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function Inq(object: MQObject, jsSelectors: MQAttr[], callback: (...params: any[]) => any): void;

/**
 * Set - Set attributes of an object
 *
 * @param {MQObject}
 *        object - reference to the object (hObj) which must refer to a queue.
 * @param {Array<MQAttr>}
 *        jsSelectors - Array containing the attributes (name and value) that
 *        will be changed.
 * @param {function}
 *        callback - Called when the operation completes. Parameters are (error)
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function Set(object: MQObject, jsSelectors: MQAttr[], callback: (...params: any[]) => any): void;

/**
 * CrtMh - Create a message handle to manage properties
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {MQCMHO}
 *        cmho - Options for handle creation
 * @param {function}
 *        callback - Called when the operation completes.
 *        Parameters are (error, message handle)
 * @return {Object} The created handle
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function CrtMh(queueManager: MQQueueManager, cmho: MQCMHO, callback: (...params: any[]) => any): any;

/**
 * DltMh - Delete a message handle
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {Object}
 *        handle - message handle
 * @param {MQDMHO}
 *        dmho - Options for handle deletion
 * @param {function}
 *        callback - Called when the operation completes.
 *        Parameters are (error)
 * @throws {MQError}
 *        Container for MQRC and MQCC values
 * @throws {TypeError}
 *        When a parameter is of incorrect type
 */
function DltMh(queueManager: MQQueueManager, handle: any, dmho: MQDMHO, callback: (...params: any[]) => any): void;

/**
 * SetMp - Set a property on a message
 * Use this to set the properties via a message handle, and then
 * pass the message handle as part of the MQPMO structure when putting
 * the message.
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {Object}
 *        handle - message handle
 * @param {MQSMPO}
 *        smpo - Options for how the property is set
 * @param {String}
 *        name - the property name
 * @param {MQPD}
 *        pd - property descriptor
 * @param {Object}
 *        value - the property value. Can be number, string, boolean or null
 * @param {function}
 *        callback - Called when the operation completes.
 *        Parameters are (error)
 * @throws {MQError}
 *        Container for MQRC and MQCC values
 * @throws {TypeError}
 *        When a parameter is of incorrect type
 */
function SetMp(queueManager: MQQueueManager, handle: any, smpo: MQSMPO, name: string, pd: MQPD, value: any, callback: (...params: any[]) => any): void;

/**
 * InqMp - Inquire on the values of a message property
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {Object}
 *        handle - message handle
 * @param {MQIMPO}
 *        impo - Options for how the property is to be queried
 * @param {MQPD}
 *        pd - property descriptor
 * @param {String}
 *        name - the property name
 * @param {Buffer}
 *        value - buffer to be filled in with the property value if it's a
 *        string or byte array
 * @param {function}
 *        callback - Called when the operation completes.
 *        Parameters are (error,name,value,length,type). If the value is
 *        not a simple type (boolean, string, number) then the length and
 *        type parameters can be used for the application to decode the
 *        returned Buffer.
 * @throws {MQError}
 *          Container for MQRC and MQCC values
 * @throws {TypeError}
 *          When a parameter is of incorrect type
 */
function InqMp(queueManager: MQQueueManager, handle: any, impo: MQIMPO, pd: MQPD, name: string, value: Buffer, callback: (...params: any[]) => any): void;

/**
 * DltMp - Delete a message property
 *
 * @param {MQQueueManager}
 *        queueManager - reference to the queue manager
 * @param {Object}
 *        handle - message handle
 * @param {MQDMPO}
 *        dmpo - Options for how the property is to be deleted
 * @param {String}
 *        name - the property name
 * @param {function}
 *        callback - Called when the operation completes.
 *        Parameters are (error)
 * @throws {MQError}
 *        Container for MQRC and MQCC values
 * @throws {TypeError}
 *        When a parameter is of incorrect type
 */
function DltMp(queueManager: MQQueueManager, handle: any, dmpo: MQDMPO, name: string, callback: (...params: any[]) => any): void;

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQMD
 * (MQ Message Descriptor) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q097390_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQMD {
    /** @member {number}
     */
    Report: number;
    /** @member {number}
     */
    MsgType: number;
    /** @member {number}
     */
    Expiry: number;
    /** @member {number}
     */
    Feedback: number;
    /** @member {number}
     */
    Encoding: number;
    /** @member {number}
     */
    CodedCharSetId: number;
    /** @member {Buffer}
     */
    Format: Buffer;
    /** @member {number}
     */
    Priority: number;
    /** @member {number}
     */
    Persistence: number;
    /** @member {Buffer}
     */
    MsgId: Buffer;
    /** @member {Buffer}
     */
    CorrelId: Buffer;
    /** @member {number}
     */
    BackoutCount: number;
    /** @member {String}
     */
    ReplyToQ: string;
    /** @member {String}
     */
    ReplyToQMgr: string;
    /** @member {String}
     */
    UserIdentifier: string;
    /** @member {Buffer}
     */
    AccountingToken: Buffer;
    /** @member {String}
     */
    ApplIdentityData: string;
    /** @member {number}
     */
    PutApplType: number;
    /** @member {String}
     */
    PutApplName: string;
    /** @member {String}
     */
    PutDate: string;
    /** @member {String}
     */
    PutTime: string;
    /** @member {String}
     */
    ApplOriginData: string;
    /** @member {Buffer}
     */
    GroupId: Buffer;
    /** @member {number}
     */
    MsgSeqNumber: number;
    /** @member {number}
     */
    Offset: number;
    /** @member {number}
     */
    MsgFlags: number;
    /** @member {number}
     */
    OriginalLength: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQCMHO
 * (MQ Create Message Handle Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q095320_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQCMHO {
    /** @member {number}
     */
    Options: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQDMHO
 * (MQ Delete Message Handle Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q096320_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQDMHO {
    /** @member {number}
     */
    Options: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQIMPO
 * (MQ Inquire Message Property Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q097210_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQIMPO {
    /** @member {number}
     */
    Options: number;
    /** @member {String}
     */
    ReturnedName: string;
    /** @member {String}
     */
    TypeString: string;
    /** @member {number}
     */
    ReturnedEncoding: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQSMPO
 * (MQ Set Message Property Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q100270_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQSMPO {
    /** @member {number}
     */
    Options: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQDMPO
 * (MQ Delete Message Property Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q096430_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQDMPO {
    /** @member {number}
     */
    Options: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQPD
 * (MQ Property Descriptor) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q098510_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQPD {
    /** @member {number}
     */
    Options: number;
    /** @member {number}
     */
    Support: number;
    /** @member {number}
     */
    Context: number;
    /** @member {number}
     */
    CopyOptions: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQOD
 * (MQ Object Descriptor) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q098100_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQOD {
    /** @member {number}
     */
    ObjectType: number;
    /** @member {String}
     */
    ObjectName: string;
    /** @member {String}
     */
    ObjectQMgrName: string;
    /** @member {String}
     */
    DynamicQName: string;
    /** @member {String}
     */
    AlternateUserId: string;
    /** @member {Buffer}
     */
    AlternateSecurityId: Buffer;
    /** @member {String}
     */
    ResolvedQName: string;
    /** @member {String}
     */
    ResolvedQMgrName: string;
    /** @member {String}
     */
    ObjectString: string;
    /** @member {String}
     */
    SelectionString: string;
    /** @member {String}
     */
    ResObjectString: string;
    /** @member {number}
     */
    ResolvedType: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQPMO
 * (MQ Put Message Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q098650_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 * <p>Note: This sets the FIQ flag by default, which is not standard in the MQI
 * but probably should have been. It's also forced to be set elsewhere.
 */
class MQPMO {
    /** @member {number}
     */
    Options: number;
    /** @member {String}
     */
    Context: string;
    /** @member {String}
     */
    ResolvedQName: string;
    /** @member {String}
     */
    ResolvedQMgrName: string;
    /** @member {number}
     */
    OriginalMsgHandle: number;
    /** @member {number}
     */
    NewMsgHandle: number;
    /** @member {number}
     */
    Action: number;
    /** @member {number}
     */
    PubLevel: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQSCO
 * (MQ SSL/TLS Configuration Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q099820_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Note the warnings in the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q095520_.htm|MQ Knowledge Center}
 * about the process-wide, once-only definition of this structure and
 * the MQRC_SSL_ALREADY_INITIALIZED warning reason code.
 */
class MQSCO {
    /** @member {String}
     */
    KeyRepository: string;
    /** @member {String}
     */
    CryptoHardware: string;
    /** @member {number}
     */
    KeyResetCount: number;
    /** @member {boolean}
     */
    FipsRequired: boolean;
    /** @member {Array.<Number>}
     */
    EncryptionPolicySuiteB: Number[];
    /** @member {number}
     */
    CertificateValPolicy: number;
    /** @member {String}
     */
    CertificateLabel: string;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQSD
 * (MQ Subscription Descriptor) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q100010_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 * Not all of the underlying fields may be exposed in this object.
 */
class MQSD {
    /** @member {number}
     */
    Options: number;
    /** @member {String}
     */
    ObjectName: string;
    /** @member {String}
     */
    AlternateUserId: string;
    /** @member {Buffer}
     */
    AlternateSecurityId: Buffer;
    /** @member {number}
     */
    SubExpiry: number;
    /** @member {String}
     */
    ObjectString: string;
    /** @member {String}
     */
    SubName: string;
    /** @member {String}
     */
    SubUserData: string;
    /** @member {Buffer}
     */
    SubCorrelId: Buffer;
    /** @member {number}
     */
    PubPriority: number;
    /** @member {Buffer}
     */
    PubAccountingToken: Buffer;
    /** @member {String}
     */
    PubApplIdentityData: string;
    /** @member {String}
     */
    SelectionString: string;
    /** @member {number}
     */
    SubLevel: number;
    /** @member {String}
     */
    ResObjectString: string;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQSRO
 * (MQ Subscription Request Options) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q101940_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQSRO {
    /** @member {number}
     */
    Options: number;
    /** @member {number}
     */
    NumPubs: number;
}

/**
 * This constructor sets default values for the object.
 * @class
 * @classdesc
 * This is a class containing the fields needed for the MQSTS
 * (MQ Status reporting) structure. See the
 * {@link https://www.ibm.com/support/knowledgecenter/en/SSFKSJ_9.0.0/com.ibm.mq.ref.dev.doc/q100540_.htm|MQ Knowledge Center}
 * for more details on the usage of each field.
 */
class MQSTS {
    /** @member {number}
     */
    CompCode: number;
    /** @member {number}
     */
    Reason: number;
    /** @member {number}
     */
    PutSuccessCount: number;
    /** @member {number}
     */
    PutWarningCount: number;
    /** @member {number}
     */
    PutFailureCount: number;
    /** @member {number}
     */
    ObjectType: number;
    /** @member {String}
     */
    ObjectName: string;
    /** @member {String}
     */
    ObjectQMgrName: string;
    /** @member {String}
     */
    ResolvedObjectName: string;
    /** @member {String}
     */
    ResolvedQMgrName: string;
    /** @member {String}
     */
    ObjectString: string;
    /** @member {String}
     */
    SubName: string;
    /** @member {number}
     */
    OpenOptions: number;
    /** @member {number}
     */
    SubOptions: number;
}


}
