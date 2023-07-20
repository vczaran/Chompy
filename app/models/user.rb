# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    has_secure_password

    before_validation :ensure_session_token

    validates :name, :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }

    has_one :cart


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user&.authenticate(password) ? user : nil
    end

    def reset_session_token
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private

    def generate_session_token
        while true
            token = SecureRandom::urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

    def ensure_session_token
        self.session_token ||= generate_session_token
    end

end
