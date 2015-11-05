defmodule HelloPhoenix.HelloController do
  # NOTE read more about this line in Controllers Guide
  use HelloPhoenix.Web, :controller

  # NOTE avoid compiler warnings with leading `_`
  # In this case we are not using `params`
  def index(conn, _params) do
    # NOTE looks for template called `index.html.eex` and renders it
    # Can also use atom (symbol), extension will be chosen based of Accept headers
    render conn, "index.html"
  end

  # NOTE pattern match agains params, binding param to messenger variable
  # Could also pass rest of params like `%{"messenger" => messenger} = params`
  def show(conn, %{"messenger" => messenger}) do
    # NOTE pass messenger value as param to view/template
    render conn, "show.html", messenger: messenger
  end

end
