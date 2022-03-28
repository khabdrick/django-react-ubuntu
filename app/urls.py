from . import views
from django.urls import path


urlpatterns = [
    path('', views.api_endpoints, name='home'),
    path('create/', views.create_contact, name='create-items'),
    path('list/', views.view_contacts, name='view-contacts'),

]