defmodule HelloPhoenix.AuthController do
  use HelloPhoenix.Web, :controller

  def auth(conn, _params) do
    redirect conn, external: Soundcloud.authorize_url!()
  end

  def callback(conn, %{"code" => code}) do
    token = Soundcloud.get_token!(code: code)
    IO.inspect token
    redirect conn, to: "/"
  end
end
