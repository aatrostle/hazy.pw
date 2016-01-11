defmodule HelloPhoenix.RoomChannel do
  use Phoenix.Channel

  alias HelloPhoenix.Repo
  alias HelloPhoenix.Message

  def join("rooms:lobby", _message, socket) do
    {:ok, socket}
  end

  def join("rooms:" <> _private_room_id, _params, _socket) do
    {:error, %{reason: "unauthorized"}}
  end

  def handle_in("new_msg", %{"username" => username, "body" => body}, socket) do
    params = %{username: username, body: body}
    changeset = Message.changeset(%Message{}, params)

    if changeset.valid? do
      Repo.insert(changeset)
    end

    broadcast! socket, "new_msg", params
    {:reply, :ok, socket}
  end

  def handle_out("new_msg", payload, socket) do
    push socket, "new_msg", payload
    {:noreply, socket}
  end
end
