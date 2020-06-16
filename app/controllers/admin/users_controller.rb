class Admin::UsersController < ApplicationController
    def index
        render json: User.all
    end

    def destroy
        @user = User.find(params[:id])
        
        @user.destroy
        respond_to do |format|
            format.json { head :no_content }
        end    
    end
end
