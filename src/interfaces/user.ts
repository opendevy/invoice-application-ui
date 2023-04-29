
export interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserFormValues extends UserCreateRequest {
  confirmPassword: string;
}

export interface LoginRequest {
  name: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordFormValues {
  password: string;
  confirmPassword: string;
}

export interface ResetPasswordRequest {
  password: string;
  token: string;
}
