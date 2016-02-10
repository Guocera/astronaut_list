# Homepage (Root path)
get '/' do
  Naut.find(1).update(image: '/uploads/naut/image/1/wilmore.png')
  Naut.find(2).update(image: '/uploads/naut/image/2/kopra.png')
  Naut.find(3).update(image: '/uploads/naut/image/3/barratt.png')
  Naut.find(4).update(image: '/uploads/naut/image/4/kelly.png')

  erb :index
end

get '/nauts' do
  Naut.all.to_json
end

get '/selected_naut' do
  Naut.first.to_json
end