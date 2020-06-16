class Admin::ArtworksController < ApplicationController
    def index
        render json: Artwork.all
    end

    def show
        render json: Artwork.find(params[:id]), serializer: ArtworkShowSerializer
    end

    def update
        @artwork = Artwork.find(params[:id])
    render json: @artwork.update(display: params[:artwork][:display]) 
    end

    def destroy
        @artwork = Artwork.find(params[:id])
        
        @artwork.destroy
        respond_to do |format|
            format.json { head :no_content }
        end    
    end

end
