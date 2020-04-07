class Section < ApplicationRecord
  belongs_to :motorcicle
  has_many :episodes
end
