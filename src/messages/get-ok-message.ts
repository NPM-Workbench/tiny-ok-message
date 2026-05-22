export type GetOkMessageProps = {
  message: string;
};

export type OkMessageResponse = {
  status: string;
  message: string;
};

export async function getOkMessage({
  message
}: GetOkMessageProps): Promise<OkMessageResponse> {
  const encodedMessage = encodeURIComponent(message);
  const response = await fetch(`https://dummyjson.com/http/200/${encodedMessage}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch OK message. Status: ${response.status}`);
  }

  return response.json() as Promise<OkMessageResponse>;
}
