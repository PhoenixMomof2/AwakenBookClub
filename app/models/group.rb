class Group < ApplicationRecord
  # validates :name, :comments, presence: true

  belongs_to :group
  belongs_to :user
end
