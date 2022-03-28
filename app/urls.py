from . import views
from django.urls import path


urlpatterns = [
    path('', views.api_endpoints, name='home'),
    path('create/', views.create_contact, name='add-items'),
    
]