from . import views
from django.urls import path


urlpatterns = [
    path('', views.api_endpoints, name='home'),
    path('create/', views.create_contact, name='create-items'),
    path('list/', views.UserList.as_view(), name='view-contacts'),
    path('update/<int:pk>/', views.update_contacts, name='update-contacts'),
    path('<int:pk>/delete/', views.delete_contact, name='delete-contact'),

]