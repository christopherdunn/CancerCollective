class Api::V1::ArtworksController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    render json: Artwork.where(display: true)

  end

  def new
  @artwork = Artwork.new

  end

  def update
    @artwork = Artwork.find(params[:id])
    render json: @artwork.update(views: params[:artwork][:views]) 

  end

  def show
      render json: Artwork.find(params[:id]), serializer: ArtworkShowSerializer
    end

    def create
      artwork = Artwork.new(
        first_name: params[:first_name],
        last_name: params[:last_name],
        city: params[:city],
        state: params[:state],
        hospital_name: params[:hospital_name],
        title: params[:title],
        art_photo: params[:art_photo],
        user_id: current_user.id,
        art_statement: params[:art_statement],
        category: params[:category],
        terms: params[:terms]
      )


      if artwork.save
        render json: @artwork, status: :created
      else
        render json: { error: artwork.errors.full_messages }, status: :unprocessable_entity
      end
    end


end
