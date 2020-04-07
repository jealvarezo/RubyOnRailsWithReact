class Motorcicle < ApplicationRecord
    has_many :sections
    has_many :episodes, through: :sections
end
