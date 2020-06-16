class Api::V1::HospitalsController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]

    def index
        render json: Hospital.all
    end

    def new
        @hospital = Hospital.new
    end

    def show
        render json: Hospital.find(params[:id]), serializer: HospitalSerializer
    end

    def create
        hospital = Hospital.new(
            name: params[:name],
            city: params[:city],
            state: params[:state],
            zip: params[:zip],
            promo_code: params[:promo_code],
            about: params[:about]
        )

        if hospital.save
            render json: @hospital, status: :created
        else
            render json: {error: hospital.errors.full_messages }, status: :unprocessable_entity
        end
    end

end