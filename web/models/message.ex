defmodule HelloPhoenix.Message do
  use HelloPhoenix.Web, :model

  schema "messages" do
    field :username, :string
    field :body, :string

    timestamps
  end

  @required_fields ~w(username body)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
