class HomesController < ApplicationController
  before_action :authorize_user, except: [:index]
  def index
  end
end
