export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    qualifications: string[];
  }
  
  export interface FormData {
    name: string;
    email: string;
    company: string;
    phone: string;
    services: string[];
    message: string;
  }