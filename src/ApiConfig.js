const dev = 'http://localhost:4000';
const prod = 'https://squadware-dev-ui.azurewebsites.net'

export const baseUrl = () => {
    switch (process.env.NODE_ENV) {
        case 'development': {
            return dev;
        }
        case 'production': {
            return prod;
        }
    }
};


const apiConfig = {
    url: {
        AUTH_URL: 'https://squadware-auth-api.azurewebsites.net/',
        USER_URL: 'https://squadware-user-api.azurewebsites.net/',
        CUSTOMER_URL: 'https://squadware-customer-api.azurewebsites.net/',
        BASE_URL: 'https://squadware-api.azurewebsites.net/',

        SIGN_IN: 'sign-in',
        EMPLOYEE_ROLES: 'role/list',
        EMPLOYEE_DISABLE_USER: 'disable-user',
        EMPLOYEE_UPDATE_PASSWORD: 'password/update',
        EMPLOYEE_ROLE_UPDATE: 'role/update',
        EMPLOYEE_SECURITY_PROFILE: 'security-profile?userId=',

        COMPANY_CHANGE: 'setcompany/{companyId}',

        AUtH_CHANGE_PASSWORD: '/Password/update',

        EMPLOYEES: 'list?pageSize=24&pageNumber=',
        EMPLOYEES_ACTIVE: 'list-active',
        EMPLOYEE_DELETE_PROFILE_PICTURE: 'document/delete-user-image?id=',
        EMPLOYEE_ADD: 'add',
        EMPLOYEE_INFO: '',
        EMPLOYEE_COMPENSATION_PUT: 'Compensation/add',
        EMPLOYEE_COMPENSATION_HISTORY: 'compensation/history?userId=',
        EMPLOYEE_COMPENSATION_HISTORY_UPDATE: '/Compensation/update',
        EMPLOYEE_COMPENSATION_HISTORY_DELETE: '/Compensation/delete?id=',
        EMPLOYEE_ADD_GET: 'add',
        EMPLOYEE_ADD_PUT: 'add',
        EMPLOYEE_UPDATE: 'update',

        EMPLOYEE_ADD_IMAGE: 'document/add-image',
        EMPLOYEE_DOCUMENT_LIST: 'document/list?userid=',
        EMPLOYEE_ADD_DOCUMENT: 'document/add-document',
        EMPLOYEE_DELETE_DOCUMENT: 'document/delete?id=',
        EMPLOYEE_AVAILABILITY_GET: 'availability/get?userid=',
        EMPLOYEE_AVAILABILITY_PUT:'availability/put',
        EMPLOYEE_AVAILABILITY_UPDATE:'availability/update',
        EMPLOYEE_AVAILABILITY_DELETE:'availability/delete?id=',
        EMPLOYEE_DAYOFF_GET: 'dayoff/get?userid=',
        EMPLOYEE_DAYOFF_PUT:'dayoff/put',
        EMPLOYEE_DAYOFF_UPDATE: 'dayoff/update',
        EMPLOYEE_DAYOFF_DELETE: 'dayoff/delete?id=',
        EMPLOYEE_ROUTE_DETAIL: 'TodaysRoutes/RouteDetail/{userId}/{date}',
        EMPLOYEE_ROUTE_JOB: 'TodaysRoutes/Jobs/{userId}/{date}',
        EMPLOYEE_STATES_LIST: '/Address/States',

        EMPLOYEE_LOG_HOURS_EMP: 'HoursLog/Employee/{EmployeeId}/{startDate}',
        EMPLOYEE_LOG_HOURS: 'HoursLog/',
        EMPLOYEE_GET_LOGHOURS: 'hoursLog/employee/',
        EMPLOYEE_GET_LOGHOURS_UPDATE: 'HoursLog/Employee/',
        EMPLOYEE_GET_LOGHOURS_ADD: 'HoursLog/Employee/',
        EMPLOYEE_GET_LOGHOURS_REMOVE: 'HoursLog/Employee/{EmployeeId}/{id}',
        EMPLOYEE_GET_LOGHOURS_ALL: 'HoursLog',
        EMPLOYEE_GET_LOG_HOURS_CLOCK_IN: 'HoursLog/Employee/{employeeId}',
        EMPLOYEE_GET_LOGHOURS_STATUS: 'HoursLog/EmployeeStatus',

        TODAY_ROUTE_STATUS: 'TodaysRoutes/RouteJobStatus/List',
        TODAY_ROUTE_PRICE_ITEM: '/TodaysRoutes/JobPriceItems/{jobId}',
        TODAY_ROUTE_EMPLOYEES: 'TodaysRoutes/Users/{userId}/{date}',
        TODAY_ROUTE_STATUS_UPDATE: 'TodaysRoutes/RouteJobStatus/{id}',
        TODAY_ROUTE_TEXT_CUSTOMER: 'TodaysRoutes/TextStatusToCustomer/{routeJobId}',
        TODAY_ROUTE_DOCUMENT: 'TodaysRoutes/Attachments/{customerId}',
        TODAY_ROUTE_PRICE: 'Job/{jobId}/PriceItem',
        TODAY_ROUTE_PRICE_DELETE: 'Job/{jobId}/PriceItem/{itemId}',

        CUSTOMERS: 'list?pageSize=24&pageNumber=',
        CUSTOMERS_GET_ENROLLMENTS: 'add',
        CUSTOMERS_ADD: 'add',
        CUSTOMERS_UPDATE: 'update',
        CUSTOMERS_GET: '',
        CUSTOMERS_MISSING_TAX_GROUP_UPDATE: 'update-tax-group/',
        CUSTOMERS_MISSING_TAX_GROUP: 'missing-tax-group?pageSize=24&pageNumber=',
        CUSTOMERS_GET_AVATAR: 'document/image?id=',
        CUSTOMERS_GET_COUNT: 'notification-counts/',
        CUSTOMERS_NOTE_UPDATE: 'updatenotes',
        CUSTOMERS_DOCUMENT_LIST: 'document/list?customerid=',
        CUSTOMERS_ADD_DOCUMENT: 'document/add-document',
        CUSTOMERS_DOCUMENT_UPDATE: 'document/update?id=',
        CUSTOMERS_DELETE_DOCUMENT: 'document/delete?id=',
        CUSTOMERS_ADD_IMAGE: 'document/add-image',
        CUSTOMERS_JOB_TEMPLATE: 'Job/Template/List',
        CUSTOMERS_JOB_DETAIL: 'Job/Template/Details',
        CUSTOMERS_JOB_TEMPLATE_ADD: '/Job/Template',
        CUSTOMERS_JOB_TEMPLATE_DELETE: '/Job/Template/{jobTemplateId}',
        CUSTOMERS_JOB_STATE: 'Job/BidStage',
        CUSTOMERS_UPDATE_SHOW_NOTE: 'updatenotes',
        CUSTOMERS_LIST_DUPLICATE: 'list-duplicate',
        CUSTOMERS_LIST_DUPLICATE_ADD: 'duplicate-add-new',
        CUSTOMERS_LIST_DUPLICATE_DELETE: 'duplicate',
        CUSTOMERS_POST_TO_QUICKBOOK: 'Job/{jobId}/PostToQuickbooks',
        // company
        COMPANY_INFO: 'Company/',
        COMPANY: 'Company?pageSize=12&pageNumber=',
        COMPANY_ADD: '/Company',
        COMPANY_UPDATE: 'Company/',
        ADMIN_ADD_IMAGE: 'Company',
        COMPANY_USER: 'Company/User',
        COMPANY_CONTRACT_FORM: '/Company/{id}/ContractsAndForms',
        COMPANY_SMS: '/Company/{id}/Communications/SMSSettings',
        COMPANY_QUOTE: '/Company/{id}/Communications/QuoteEmailSettings',
        COMPANY_FILE: '/Company/{id}/Communications/PromoAttachments',
        COMPANY_PROMO_ORDER: '/Company/{companyId}/Communications/PromoAttachmentsPosition',
        COMPANY_EQUIPMENT_LIST: '/Company/{id}/Equipment',
        COMPANY_EQUIPMENT: 'Company/{id}/Equipment',
        COMPANY_EQUIPMENT_SAVE_ALL: 'Company/{id}/Equipment/All',
        COMPANY_INTEGRATIONS: 'Company/{id}/Integrations/AskTheSeal',
        COMPANY_INTEGRATIONS_API: '/ApiSiteAccess/{companyId}',
        COMPANY_INTEGRATIONS_API_ALL: '/ApiSiteAccess/{companyId}/All',
        COMPANY_INTEGRATIONS_SOURCE: '/AdSource/{companyId}',
        COMPANY_INTEGRATIONS_SOURCE_ALL: '/AdSource/{companyId}/All',
        COMPANY_INTEGRATIONS_API_DELETE: '/ApiSiteAccess/{companyId}/{siteAccessId}',
        COMPANY_INTEGRATIONS_SOURCE_DELETE: '/AdSource/{companyId}/{adSourceId}',
        COMPANY_EMPLOYEES: 'list?pageSize=200&pageNumber=',
        COMPANY_ADVERTISING_CSV: '/Company/{companyId}/Advertising/CSV',
        COMPANY_PRICES_ITEM: '/Company/{companyId}/PriceItem',
        COMPANY_PRICES_ITEM_ALL: '/Company/{companyId}/PriceItem/All',
        COMPANY_PRICES_QUICKBOOK_LIST: '/Company/{companyId}/QuickBooksItem',
        COMPANY_DELETE_FILE: '/Company/{companyId}/Communications/PromoAttachments/{attachmentId}',
        COMPANY_ADV_ADDRESS: '/Company/{companyId}/Advertising/Address',
        COMPANY_PRICE_TAX: '/Company/{companyId}/Taxes',
        COMPANY_EMPLOYEES_AVAILABLE: '/list-available?pageSize=200&pageNumber=',
        COMPANY_MULTI: '/Company/MultiCompanyUser/{userId}',

        DASHBOARD_BILL_TO_DO: 'api/Dashboard/BidsToDo',
        DASHBOARD_BILL_TO_DO_COUNT: 'api/Dashboard/BidsToDoCount',
        DASHBOARD_WORD_COMPLETE_COUNT: 'api/Dashboard/WorkCompleted',
        DASHBOARD_SCHEDULE_COUNT: 'api/Dashboard/ScheduledAmount',
        DASHBOARD_PROFIT_COUNT: 'api/Dashboard/TotalProfit',
        DASHBOARD_FOLLOW_UP_CONTACT: '/Job/FollowUpContact?limit=3',
        DASHBOARD_FOLLOW_UP_CONTACT_MARK_COMPLETE: 'Job/MarkFollowUpComplete',

        // Job Addresses
        CUSTOMER_JOB_ADDRESSES: 'job/address?customerId=',
        CUSTOMER_JOB_ADDRESS: 'job/address/',
        CUSTOMER_JOB_ADDRESSES_ADD: 'job/jobsite',
        CUSTOMER_JOB_ADDRESSES_UPDATE: 'job/jobsite',
        CUSTOMER_JOB_ADDRESSES_DELETE: 'job/jobsite/',
        CUSTOMER_JOB_ADDRESSES_VERIFY: '/Address/Verify',

        // Jobs
        CUSTOMER_JOBS: 'job/address/',
        CUSTOMER_JOB: 'job/',
        CUSTOMER_JOB_ADD: 'job',
        CUSTOMER_JOB_UPDATE: 'job',
        CUSTOMER_JOB_DELETE: 'job/',
        CUSTOMER_JOB_COMBINES: 'job/mergeJobs',
        CUSTOMER_JOB_SPLITS: '/split',
        CUSTOMER_JOB_SPLIT_UPDATE: '/split',
        CUSTOMER_JOB_FOLLOW_UP: '/Job/{jobId}/FollowUp',
        CUSTOMER_JOB_SALESPERSON_COMMISSION: 'salesperson',
        CUSTOMER_JOB_SALESPERSON_COMMISSION_GET: 'job/salesperson?jobId=',
        CUSTOMER_JOB_SALESPERSON_COMMISSION_SAVE: 'job/salesperson?jobId=',
        // Routes
        ROUTE: 'route/',
        ROUTE_DISTANCE: '/Route/Distance',
        EQUIPMENTS_FOR_ROUTE: 'equipment/list?date=',
        TO_BE_SCHEDULED_JOBS: 'job/list?jobStage=2',

        // Hours Log
        HOURS_LOG_EMPLOYEE_STATUS: 'HoursLog/EmployeeStatus',
    }
}

export default apiConfig;
