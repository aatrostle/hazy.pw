defmodule Soundcloud do
  @moduledoc """
  An OAuth2 strategy for Soundcloud.
  """
  use OAuth2.Strategy
  alias OAuth2.Strategy.AuthCode

  def new do
    OAuth2.Client.new([
      strategy: __MODULE__,
      client_id: System.get_env("SC_CLIENT_ID"),
      client_secret: System.get_env("SC_CLIENT_SECRET"),
      redirect_uri: System.get_env("SC_REDIRECT_URI"),
      site: "https://api.soundcloud.com",
      authorize_url: System.get_env("SC_AUTHORIZE_URL"),
      token_url: System.get_env("SC_TOKEN_URL")
    ])
  end

  def authorize_url!(params \\ []) do
    OAuth2.Client.authorize_url!(new(), params)
  end

  def get_token!(params \\ [], headers \\ []) do
    OAuth2.Client.get_token!(new(), params)
  end

  def authorize_url(client, params) do
    OAuth2.Strategy.AuthCode.authorize_url(client, params)
  end

  def get_token(client, params, headers) do
    client
    |> put_header("Accept", "application/json")
    |> put_header("Authorization", "Basic " <> Base.encode64(System.get_env("SC_CLIENT_ID") <> ":" <> System.get_env("SC_CLIENT_SECRET")) )
  end

end
