class PageController < ApplicationController
  def index
  end

  def episodes
    @episodes= Motorcicle.first.episodes

    render json: { data: @episodes }
  end
end
