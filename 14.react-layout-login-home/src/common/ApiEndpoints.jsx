const BASE_URLS = {
    DIRECTORY_BASE: 'http://localhost:8080',
    PATIENT_BASE: 'http://localhost:8080',
    CASE_BASE: 'http://localhost:8080',
    APPOINTMENT_BASE: 'http://localhost:8080',
  }
  
  const FULL_URLS = {
    LOGIN: BASE_URLS.DIRECTORY_BASE+'/api/auth/v1/login',
  }
  
  export { FULL_URLS };