# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_21_095713) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.string "activity_type", null: false
    t.string "name", null: false
    t.string "city", null: false
    t.integer "user_id", null: false
    t.decimal "distance", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "maps_api_static_img", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.date "birthday"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "facebook_id"
    t.string "gender"
    t.string "location"
    t.string "country"
    t.boolean "subscribed"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "route_completed_id", null: false
    t.decimal "avg_pace", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.json "route"
    t.date "completed_date", null: false
    t.string "name", null: false
    t.text "notes", null: false
    t.string "duration", null: false
  end

end
