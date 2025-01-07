interface SuccessResParams {
  data: Record<string, string | number | boolean>;
}

export function SuccessRes({ data }: SuccessResParams) {
  return {
    data,
    statusCode: 200,
    message: 'success',
  };
}

interface ErrorResParams {
  message: string;
  statusCode: number;
}

export function ErrorRes({ message, statusCode }: ErrorResParams) {
  return {
    message,
    statusCode,
  };
}
