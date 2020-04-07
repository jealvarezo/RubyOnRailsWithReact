class Episode < ApplicationRecord
  belongs_to :section
  has_many :episodes
end
